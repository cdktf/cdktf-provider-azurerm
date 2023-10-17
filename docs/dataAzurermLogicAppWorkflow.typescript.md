# `data_azurerm_logic_app_workflow`

Refer to the Terraform Registory for docs: [`data_azurerm_logic_app_workflow`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/logic_app_workflow).

# `dataAzurermLogicAppWorkflow` Submodule <a name="`dataAzurermLogicAppWorkflow` Submodule" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermLogicAppWorkflow <a name="DataAzurermLogicAppWorkflow" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/logic_app_workflow azurerm_logic_app_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.Initializer"></a>

```typescript
import { dataAzurermLogicAppWorkflow } from '@cdktf/provider-azurerm'

new dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow(scope: Construct, id: string, config: DataAzurermLogicAppWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig">DataAzurermLogicAppWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig">DataAzurermLogicAppWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermLogicAppWorkflowTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeouts">DataAzurermLogicAppWorkflowTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermLogicAppWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.isConstruct"></a>

```typescript
import { dataAzurermLogicAppWorkflow } from '@cdktf/provider-azurerm'

dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.isTerraformElement"></a>

```typescript
import { dataAzurermLogicAppWorkflow } from '@cdktf/provider-azurerm'

dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.isTerraformDataSource"></a>

```typescript
import { dataAzurermLogicAppWorkflow } from '@cdktf/provider-azurerm'

dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.generateConfigForImport"></a>

```typescript
import { dataAzurermLogicAppWorkflow } from '@cdktf/provider-azurerm'

dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermLogicAppWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermLogicAppWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermLogicAppWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/logic_app_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermLogicAppWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.accessEndpoint">accessEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.connectorEndpointIpAddresses">connectorEndpointIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.connectorOutboundIpAddresses">connectorOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList">DataAzurermLogicAppWorkflowIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.logicAppIntegrationAccountId">logicAppIntegrationAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.parameters">parameters</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference">DataAzurermLogicAppWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.workflowEndpointIpAddresses">workflowEndpointIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.workflowOutboundIpAddresses">workflowOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.workflowSchema">workflowSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.workflowVersion">workflowVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeouts">DataAzurermLogicAppWorkflowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessEndpoint`<sup>Required</sup> <a name="accessEndpoint" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.accessEndpoint"></a>

```typescript
public readonly accessEndpoint: string;
```

- *Type:* string

---

##### `connectorEndpointIpAddresses`<sup>Required</sup> <a name="connectorEndpointIpAddresses" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.connectorEndpointIpAddresses"></a>

```typescript
public readonly connectorEndpointIpAddresses: string[];
```

- *Type:* string[]

---

##### `connectorOutboundIpAddresses`<sup>Required</sup> <a name="connectorOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.connectorOutboundIpAddresses"></a>

```typescript
public readonly connectorOutboundIpAddresses: string[];
```

- *Type:* string[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.identity"></a>

```typescript
public readonly identity: DataAzurermLogicAppWorkflowIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList">DataAzurermLogicAppWorkflowIdentityList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logicAppIntegrationAccountId`<sup>Required</sup> <a name="logicAppIntegrationAccountId" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.logicAppIntegrationAccountId"></a>

```typescript
public readonly logicAppIntegrationAccountId: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.parameters"></a>

```typescript
public readonly parameters: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermLogicAppWorkflowTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference">DataAzurermLogicAppWorkflowTimeoutsOutputReference</a>

---

##### `workflowEndpointIpAddresses`<sup>Required</sup> <a name="workflowEndpointIpAddresses" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.workflowEndpointIpAddresses"></a>

```typescript
public readonly workflowEndpointIpAddresses: string[];
```

- *Type:* string[]

---

##### `workflowOutboundIpAddresses`<sup>Required</sup> <a name="workflowOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.workflowOutboundIpAddresses"></a>

```typescript
public readonly workflowOutboundIpAddresses: string[];
```

- *Type:* string[]

---

##### `workflowSchema`<sup>Required</sup> <a name="workflowSchema" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.workflowSchema"></a>

```typescript
public readonly workflowSchema: string;
```

- *Type:* string

---

##### `workflowVersion`<sup>Required</sup> <a name="workflowVersion" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.workflowVersion"></a>

```typescript
public readonly workflowVersion: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermLogicAppWorkflowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeouts">DataAzurermLogicAppWorkflowTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermLogicAppWorkflowConfig <a name="DataAzurermLogicAppWorkflowConfig" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.Initializer"></a>

```typescript
import { dataAzurermLogicAppWorkflow } from '@cdktf/provider-azurerm'

const dataAzurermLogicAppWorkflowConfig: dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/logic_app_workflow#name DataAzurermLogicAppWorkflow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/logic_app_workflow#resource_group_name DataAzurermLogicAppWorkflow#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/logic_app_workflow#id DataAzurermLogicAppWorkflow#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeouts">DataAzurermLogicAppWorkflowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/logic_app_workflow#name DataAzurermLogicAppWorkflow#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/logic_app_workflow#resource_group_name DataAzurermLogicAppWorkflow#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/logic_app_workflow#id DataAzurermLogicAppWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermLogicAppWorkflowTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeouts">DataAzurermLogicAppWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/logic_app_workflow#timeouts DataAzurermLogicAppWorkflow#timeouts}

---

### DataAzurermLogicAppWorkflowIdentity <a name="DataAzurermLogicAppWorkflowIdentity" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentity.Initializer"></a>

```typescript
import { dataAzurermLogicAppWorkflow } from '@cdktf/provider-azurerm'

const dataAzurermLogicAppWorkflowIdentity: dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentity = { ... }
```


### DataAzurermLogicAppWorkflowTimeouts <a name="DataAzurermLogicAppWorkflowTimeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeouts.Initializer"></a>

```typescript
import { dataAzurermLogicAppWorkflow } from '@cdktf/provider-azurerm'

const dataAzurermLogicAppWorkflowTimeouts: dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/logic_app_workflow#read DataAzurermLogicAppWorkflow#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/logic_app_workflow#read DataAzurermLogicAppWorkflow#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermLogicAppWorkflowIdentityList <a name="DataAzurermLogicAppWorkflowIdentityList" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.Initializer"></a>

```typescript
import { dataAzurermLogicAppWorkflow } from '@cdktf/provider-azurerm'

new dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermLogicAppWorkflowIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermLogicAppWorkflowIdentityOutputReference <a name="DataAzurermLogicAppWorkflowIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermLogicAppWorkflow } from '@cdktf/provider-azurerm'

new dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentity">DataAzurermLogicAppWorkflowIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermLogicAppWorkflowIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowIdentity">DataAzurermLogicAppWorkflowIdentity</a>

---


### DataAzurermLogicAppWorkflowTimeoutsOutputReference <a name="DataAzurermLogicAppWorkflowTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermLogicAppWorkflow } from '@cdktf/provider-azurerm'

new dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeouts">DataAzurermLogicAppWorkflowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermLogicAppWorkflowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppWorkflow.DataAzurermLogicAppWorkflowTimeouts">DataAzurermLogicAppWorkflowTimeouts</a>

---



