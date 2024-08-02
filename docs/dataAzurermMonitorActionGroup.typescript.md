# `dataAzurermMonitorActionGroup` Submodule <a name="`dataAzurermMonitorActionGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorActionGroup <a name="DataAzurermMonitorActionGroup" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_action_group azurerm_monitor_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup(scope: Construct, id: string, config: DataAzurermMonitorActionGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig">DataAzurermMonitorActionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig">DataAzurermMonitorActionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMonitorActionGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts">DataAzurermMonitorActionGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMonitorActionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isConstruct"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformElement"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformDataSource"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.generateConfigForImport"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermMonitorActionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMonitorActionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMonitorActionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_action_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMonitorActionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.armRoleReceiver">armRoleReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList">DataAzurermMonitorActionGroupArmRoleReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.automationRunbookReceiver">automationRunbookReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList">DataAzurermMonitorActionGroupAutomationRunbookReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.azureAppPushReceiver">azureAppPushReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList">DataAzurermMonitorActionGroupAzureAppPushReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.azureFunctionReceiver">azureFunctionReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList">DataAzurermMonitorActionGroupAzureFunctionReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.emailReceiver">emailReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList">DataAzurermMonitorActionGroupEmailReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.eventHubReceiver">eventHubReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList">DataAzurermMonitorActionGroupEventHubReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.itsmReceiver">itsmReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList">DataAzurermMonitorActionGroupItsmReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.logicAppReceiver">logicAppReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList">DataAzurermMonitorActionGroupLogicAppReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.smsReceiver">smsReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList">DataAzurermMonitorActionGroupSmsReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference">DataAzurermMonitorActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.voiceReceiver">voiceReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList">DataAzurermMonitorActionGroupVoiceReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.webhookReceiver">webhookReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList">DataAzurermMonitorActionGroupWebhookReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts">DataAzurermMonitorActionGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `armRoleReceiver`<sup>Required</sup> <a name="armRoleReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.armRoleReceiver"></a>

```typescript
public readonly armRoleReceiver: DataAzurermMonitorActionGroupArmRoleReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList">DataAzurermMonitorActionGroupArmRoleReceiverList</a>

---

##### `automationRunbookReceiver`<sup>Required</sup> <a name="automationRunbookReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.automationRunbookReceiver"></a>

```typescript
public readonly automationRunbookReceiver: DataAzurermMonitorActionGroupAutomationRunbookReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList">DataAzurermMonitorActionGroupAutomationRunbookReceiverList</a>

---

##### `azureAppPushReceiver`<sup>Required</sup> <a name="azureAppPushReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.azureAppPushReceiver"></a>

```typescript
public readonly azureAppPushReceiver: DataAzurermMonitorActionGroupAzureAppPushReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList">DataAzurermMonitorActionGroupAzureAppPushReceiverList</a>

---

##### `azureFunctionReceiver`<sup>Required</sup> <a name="azureFunctionReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.azureFunctionReceiver"></a>

```typescript
public readonly azureFunctionReceiver: DataAzurermMonitorActionGroupAzureFunctionReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList">DataAzurermMonitorActionGroupAzureFunctionReceiverList</a>

---

##### `emailReceiver`<sup>Required</sup> <a name="emailReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.emailReceiver"></a>

```typescript
public readonly emailReceiver: DataAzurermMonitorActionGroupEmailReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList">DataAzurermMonitorActionGroupEmailReceiverList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `eventHubReceiver`<sup>Required</sup> <a name="eventHubReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.eventHubReceiver"></a>

```typescript
public readonly eventHubReceiver: DataAzurermMonitorActionGroupEventHubReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList">DataAzurermMonitorActionGroupEventHubReceiverList</a>

---

##### `itsmReceiver`<sup>Required</sup> <a name="itsmReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.itsmReceiver"></a>

```typescript
public readonly itsmReceiver: DataAzurermMonitorActionGroupItsmReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList">DataAzurermMonitorActionGroupItsmReceiverList</a>

---

##### `logicAppReceiver`<sup>Required</sup> <a name="logicAppReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.logicAppReceiver"></a>

```typescript
public readonly logicAppReceiver: DataAzurermMonitorActionGroupLogicAppReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList">DataAzurermMonitorActionGroupLogicAppReceiverList</a>

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `smsReceiver`<sup>Required</sup> <a name="smsReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.smsReceiver"></a>

```typescript
public readonly smsReceiver: DataAzurermMonitorActionGroupSmsReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList">DataAzurermMonitorActionGroupSmsReceiverList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorActionGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference">DataAzurermMonitorActionGroupTimeoutsOutputReference</a>

---

##### `voiceReceiver`<sup>Required</sup> <a name="voiceReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.voiceReceiver"></a>

```typescript
public readonly voiceReceiver: DataAzurermMonitorActionGroupVoiceReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList">DataAzurermMonitorActionGroupVoiceReceiverList</a>

---

##### `webhookReceiver`<sup>Required</sup> <a name="webhookReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.webhookReceiver"></a>

```typescript
public readonly webhookReceiver: DataAzurermMonitorActionGroupWebhookReceiverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList">DataAzurermMonitorActionGroupWebhookReceiverList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMonitorActionGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts">DataAzurermMonitorActionGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorActionGroupArmRoleReceiver <a name="DataAzurermMonitorActionGroupArmRoleReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiver.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupArmRoleReceiver: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiver = { ... }
```


### DataAzurermMonitorActionGroupAutomationRunbookReceiver <a name="DataAzurermMonitorActionGroupAutomationRunbookReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiver.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupAutomationRunbookReceiver: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiver = { ... }
```


### DataAzurermMonitorActionGroupAzureAppPushReceiver <a name="DataAzurermMonitorActionGroupAzureAppPushReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiver.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupAzureAppPushReceiver: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiver = { ... }
```


### DataAzurermMonitorActionGroupAzureFunctionReceiver <a name="DataAzurermMonitorActionGroupAzureFunctionReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiver.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupAzureFunctionReceiver: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiver = { ... }
```


### DataAzurermMonitorActionGroupConfig <a name="DataAzurermMonitorActionGroupConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupConfig: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_action_group#name DataAzurermMonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_action_group#resource_group_name DataAzurermMonitorActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_action_group#id DataAzurermMonitorActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts">DataAzurermMonitorActionGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_action_group#name DataAzurermMonitorActionGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_action_group#resource_group_name DataAzurermMonitorActionGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_action_group#id DataAzurermMonitorActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorActionGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts">DataAzurermMonitorActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_action_group#timeouts DataAzurermMonitorActionGroup#timeouts}

---

### DataAzurermMonitorActionGroupEmailReceiver <a name="DataAzurermMonitorActionGroupEmailReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiver.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupEmailReceiver: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiver = { ... }
```


### DataAzurermMonitorActionGroupEventHubReceiver <a name="DataAzurermMonitorActionGroupEventHubReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiver.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupEventHubReceiver: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiver = { ... }
```


### DataAzurermMonitorActionGroupItsmReceiver <a name="DataAzurermMonitorActionGroupItsmReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiver.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupItsmReceiver: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiver = { ... }
```


### DataAzurermMonitorActionGroupLogicAppReceiver <a name="DataAzurermMonitorActionGroupLogicAppReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiver.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupLogicAppReceiver: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiver = { ... }
```


### DataAzurermMonitorActionGroupSmsReceiver <a name="DataAzurermMonitorActionGroupSmsReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiver.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupSmsReceiver: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiver = { ... }
```


### DataAzurermMonitorActionGroupTimeouts <a name="DataAzurermMonitorActionGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupTimeouts: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_action_group#read DataAzurermMonitorActionGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_action_group#read DataAzurermMonitorActionGroup#read}.

---

### DataAzurermMonitorActionGroupVoiceReceiver <a name="DataAzurermMonitorActionGroupVoiceReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiver.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupVoiceReceiver: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiver = { ... }
```


### DataAzurermMonitorActionGroupWebhookReceiver <a name="DataAzurermMonitorActionGroupWebhookReceiver" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiver.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupWebhookReceiver: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiver = { ... }
```


### DataAzurermMonitorActionGroupWebhookReceiverAadAuth <a name="DataAzurermMonitorActionGroupWebhookReceiverAadAuth" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuth.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

const dataAzurermMonitorActionGroupWebhookReceiverAadAuth: dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuth = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorActionGroupArmRoleReceiverList <a name="DataAzurermMonitorActionGroupArmRoleReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorActionGroupArmRoleReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorActionGroupArmRoleReceiverOutputReference <a name="DataAzurermMonitorActionGroupArmRoleReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiver">DataAzurermMonitorActionGroupArmRoleReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorActionGroupArmRoleReceiver;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupArmRoleReceiver">DataAzurermMonitorActionGroupArmRoleReceiver</a>

---


### DataAzurermMonitorActionGroupAutomationRunbookReceiverList <a name="DataAzurermMonitorActionGroupAutomationRunbookReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference <a name="DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountId">automationAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbook">isGlobalRunbook</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookName">runbookName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUri">serviceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceId">webhookResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiver">DataAzurermMonitorActionGroupAutomationRunbookReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automationAccountId`<sup>Required</sup> <a name="automationAccountId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountId"></a>

```typescript
public readonly automationAccountId: string;
```

- *Type:* string

---

##### `isGlobalRunbook`<sup>Required</sup> <a name="isGlobalRunbook" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbook"></a>

```typescript
public readonly isGlobalRunbook: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runbookName`<sup>Required</sup> <a name="runbookName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookName"></a>

```typescript
public readonly runbookName: string;
```

- *Type:* string

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `webhookResourceId`<sup>Required</sup> <a name="webhookResourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceId"></a>

```typescript
public readonly webhookResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorActionGroupAutomationRunbookReceiver;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAutomationRunbookReceiver">DataAzurermMonitorActionGroupAutomationRunbookReceiver</a>

---


### DataAzurermMonitorActionGroupAzureAppPushReceiverList <a name="DataAzurermMonitorActionGroupAzureAppPushReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference <a name="DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiver">DataAzurermMonitorActionGroupAzureAppPushReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorActionGroupAzureAppPushReceiver;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureAppPushReceiver">DataAzurermMonitorActionGroupAzureAppPushReceiver</a>

---


### DataAzurermMonitorActionGroupAzureFunctionReceiverList <a name="DataAzurermMonitorActionGroupAzureFunctionReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference <a name="DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceId">functionAppResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrl">httpTriggerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiver">DataAzurermMonitorActionGroupAzureFunctionReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionAppResourceId`<sup>Required</sup> <a name="functionAppResourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceId"></a>

```typescript
public readonly functionAppResourceId: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `httpTriggerUrl`<sup>Required</sup> <a name="httpTriggerUrl" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrl"></a>

```typescript
public readonly httpTriggerUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorActionGroupAzureFunctionReceiver;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupAzureFunctionReceiver">DataAzurermMonitorActionGroupAzureFunctionReceiver</a>

---


### DataAzurermMonitorActionGroupEmailReceiverList <a name="DataAzurermMonitorActionGroupEmailReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorActionGroupEmailReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorActionGroupEmailReceiverOutputReference <a name="DataAzurermMonitorActionGroupEmailReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiver">DataAzurermMonitorActionGroupEmailReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorActionGroupEmailReceiver;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEmailReceiver">DataAzurermMonitorActionGroupEmailReceiver</a>

---


### DataAzurermMonitorActionGroupEventHubReceiverList <a name="DataAzurermMonitorActionGroupEventHubReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorActionGroupEventHubReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorActionGroupEventHubReceiverOutputReference <a name="DataAzurermMonitorActionGroupEventHubReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.eventHubId">eventHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.eventHubName">eventHubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespace">eventHubNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiver">DataAzurermMonitorActionGroupEventHubReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventHubId`<sup>Required</sup> <a name="eventHubId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.eventHubId"></a>

```typescript
public readonly eventHubId: string;
```

- *Type:* string

---

##### `eventHubName`<sup>Required</sup> <a name="eventHubName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.eventHubName"></a>

```typescript
public readonly eventHubName: string;
```

- *Type:* string

---

##### `eventHubNamespace`<sup>Required</sup> <a name="eventHubNamespace" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespace"></a>

```typescript
public readonly eventHubNamespace: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorActionGroupEventHubReceiver;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupEventHubReceiver">DataAzurermMonitorActionGroupEventHubReceiver</a>

---


### DataAzurermMonitorActionGroupItsmReceiverList <a name="DataAzurermMonitorActionGroupItsmReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorActionGroupItsmReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorActionGroupItsmReceiverOutputReference <a name="DataAzurermMonitorActionGroupItsmReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.ticketConfiguration">ticketConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiver">DataAzurermMonitorActionGroupItsmReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `ticketConfiguration`<sup>Required</sup> <a name="ticketConfiguration" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.ticketConfiguration"></a>

```typescript
public readonly ticketConfiguration: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorActionGroupItsmReceiver;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupItsmReceiver">DataAzurermMonitorActionGroupItsmReceiver</a>

---


### DataAzurermMonitorActionGroupLogicAppReceiverList <a name="DataAzurermMonitorActionGroupLogicAppReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorActionGroupLogicAppReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorActionGroupLogicAppReceiverOutputReference <a name="DataAzurermMonitorActionGroupLogicAppReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrl">callbackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiver">DataAzurermMonitorActionGroupLogicAppReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `callbackUrl`<sup>Required</sup> <a name="callbackUrl" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrl"></a>

```typescript
public readonly callbackUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorActionGroupLogicAppReceiver;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupLogicAppReceiver">DataAzurermMonitorActionGroupLogicAppReceiver</a>

---


### DataAzurermMonitorActionGroupSmsReceiverList <a name="DataAzurermMonitorActionGroupSmsReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorActionGroupSmsReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorActionGroupSmsReceiverOutputReference <a name="DataAzurermMonitorActionGroupSmsReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiver">DataAzurermMonitorActionGroupSmsReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorActionGroupSmsReceiver;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupSmsReceiver">DataAzurermMonitorActionGroupSmsReceiver</a>

---


### DataAzurermMonitorActionGroupTimeoutsOutputReference <a name="DataAzurermMonitorActionGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts">DataAzurermMonitorActionGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMonitorActionGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupTimeouts">DataAzurermMonitorActionGroupTimeouts</a>

---


### DataAzurermMonitorActionGroupVoiceReceiverList <a name="DataAzurermMonitorActionGroupVoiceReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorActionGroupVoiceReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorActionGroupVoiceReceiverOutputReference <a name="DataAzurermMonitorActionGroupVoiceReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiver">DataAzurermMonitorActionGroupVoiceReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorActionGroupVoiceReceiver;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupVoiceReceiver">DataAzurermMonitorActionGroupVoiceReceiver</a>

---


### DataAzurermMonitorActionGroupWebhookReceiverAadAuthList <a name="DataAzurermMonitorActionGroupWebhookReceiverAadAuthList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference <a name="DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUri">identifierUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuth">DataAzurermMonitorActionGroupWebhookReceiverAadAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierUri`<sup>Required</sup> <a name="identifierUri" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUri"></a>

```typescript
public readonly identifierUri: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorActionGroupWebhookReceiverAadAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuth">DataAzurermMonitorActionGroupWebhookReceiverAadAuth</a>

---


### DataAzurermMonitorActionGroupWebhookReceiverList <a name="DataAzurermMonitorActionGroupWebhookReceiverList" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorActionGroupWebhookReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorActionGroupWebhookReceiverOutputReference <a name="DataAzurermMonitorActionGroupWebhookReceiverOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorActionGroup } from '@cdktf/provider-azurerm'

new dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.aadAuth">aadAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList">DataAzurermMonitorActionGroupWebhookReceiverAadAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.serviceUri">serviceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchema">useCommonAlertSchema</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiver">DataAzurermMonitorActionGroupWebhookReceiver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aadAuth`<sup>Required</sup> <a name="aadAuth" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.aadAuth"></a>

```typescript
public readonly aadAuth: DataAzurermMonitorActionGroupWebhookReceiverAadAuthList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverAadAuthList">DataAzurermMonitorActionGroupWebhookReceiverAadAuthList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

---

##### `useCommonAlertSchema`<sup>Required</sup> <a name="useCommonAlertSchema" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchema"></a>

```typescript
public readonly useCommonAlertSchema: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorActionGroupWebhookReceiver;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorActionGroup.DataAzurermMonitorActionGroupWebhookReceiver">DataAzurermMonitorActionGroupWebhookReceiver</a>

---



