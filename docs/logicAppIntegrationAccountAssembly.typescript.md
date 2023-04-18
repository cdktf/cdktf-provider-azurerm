# `azurerm_logic_app_integration_account_assembly`

Refer to the Terraform Registory for docs: [`azurerm_logic_app_integration_account_assembly`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly).

# `logicAppIntegrationAccountAssembly` Submodule <a name="`logicAppIntegrationAccountAssembly` Submodule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppIntegrationAccountAssembly <a name="LogicAppIntegrationAccountAssembly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly azurerm_logic_app_integration_account_assembly}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer"></a>

```typescript
import { logicAppIntegrationAccountAssembly } from '@cdktf/provider-azurerm'

new logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly(scope: Construct, id: string, config: LogicAppIntegrationAccountAssemblyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig">LogicAppIntegrationAccountAssemblyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig">LogicAppIntegrationAccountAssemblyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetAssemblyVersion">resetAssemblyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetContentLinkUri">resetContentLinkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.putTimeouts"></a>

```typescript
public putTimeouts(value: LogicAppIntegrationAccountAssemblyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a>

---

##### `resetAssemblyVersion` <a name="resetAssemblyVersion" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetAssemblyVersion"></a>

```typescript
public resetAssemblyVersion(): void
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentLinkUri` <a name="resetContentLinkUri" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetContentLinkUri"></a>

```typescript
public resetContentLinkUri(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isConstruct"></a>

```typescript
import { logicAppIntegrationAccountAssembly } from '@cdktf/provider-azurerm'

logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformElement"></a>

```typescript
import { logicAppIntegrationAccountAssembly } from '@cdktf/provider-azurerm'

logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformResource"></a>

```typescript
import { logicAppIntegrationAccountAssembly } from '@cdktf/provider-azurerm'

logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference">LogicAppIntegrationAccountAssemblyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyNameInput">assemblyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyVersionInput">assemblyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentLinkUriInput">contentLinkUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.integrationAccountNameInput">integrationAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyName">assemblyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyVersion">assemblyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentLinkUri">contentLinkUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.integrationAccountName">integrationAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.timeouts"></a>

```typescript
public readonly timeouts: LogicAppIntegrationAccountAssemblyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference">LogicAppIntegrationAccountAssemblyTimeoutsOutputReference</a>

---

##### `assemblyNameInput`<sup>Optional</sup> <a name="assemblyNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyNameInput"></a>

```typescript
public readonly assemblyNameInput: string;
```

- *Type:* string

---

##### `assemblyVersionInput`<sup>Optional</sup> <a name="assemblyVersionInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyVersionInput"></a>

```typescript
public readonly assemblyVersionInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentLinkUriInput`<sup>Optional</sup> <a name="contentLinkUriInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentLinkUriInput"></a>

```typescript
public readonly contentLinkUriInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationAccountNameInput`<sup>Optional</sup> <a name="integrationAccountNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.integrationAccountNameInput"></a>

```typescript
public readonly integrationAccountNameInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LogicAppIntegrationAccountAssemblyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a> | cdktf.IResolvable

---

##### `assemblyName`<sup>Required</sup> <a name="assemblyName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyName"></a>

```typescript
public readonly assemblyName: string;
```

- *Type:* string

---

##### `assemblyVersion`<sup>Required</sup> <a name="assemblyVersion" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyVersion"></a>

```typescript
public readonly assemblyVersion: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentLinkUri`<sup>Required</sup> <a name="contentLinkUri" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentLinkUri"></a>

```typescript
public readonly contentLinkUri: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationAccountName`<sup>Required</sup> <a name="integrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.integrationAccountName"></a>

```typescript
public readonly integrationAccountName: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppIntegrationAccountAssemblyConfig <a name="LogicAppIntegrationAccountAssemblyConfig" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.Initializer"></a>

```typescript
import { logicAppIntegrationAccountAssembly } from '@cdktf/provider-azurerm'

const logicAppIntegrationAccountAssemblyConfig: logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.assemblyName">assemblyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#assembly_name LogicAppIntegrationAccountAssembly#assembly_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.integrationAccountName">integrationAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#integration_account_name LogicAppIntegrationAccountAssembly#integration_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#name LogicAppIntegrationAccountAssembly#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#resource_group_name LogicAppIntegrationAccountAssembly#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.assemblyVersion">assemblyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#assembly_version LogicAppIntegrationAccountAssembly#assembly_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#content LogicAppIntegrationAccountAssembly#content}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.contentLinkUri">contentLinkUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#content_link_uri LogicAppIntegrationAccountAssembly#content_link_uri}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#id LogicAppIntegrationAccountAssembly#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#metadata LogicAppIntegrationAccountAssembly#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assemblyName`<sup>Required</sup> <a name="assemblyName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.assemblyName"></a>

```typescript
public readonly assemblyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#assembly_name LogicAppIntegrationAccountAssembly#assembly_name}.

---

##### `integrationAccountName`<sup>Required</sup> <a name="integrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.integrationAccountName"></a>

```typescript
public readonly integrationAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#integration_account_name LogicAppIntegrationAccountAssembly#integration_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#name LogicAppIntegrationAccountAssembly#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#resource_group_name LogicAppIntegrationAccountAssembly#resource_group_name}.

---

##### `assemblyVersion`<sup>Optional</sup> <a name="assemblyVersion" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.assemblyVersion"></a>

```typescript
public readonly assemblyVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#assembly_version LogicAppIntegrationAccountAssembly#assembly_version}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#content LogicAppIntegrationAccountAssembly#content}.

---

##### `contentLinkUri`<sup>Optional</sup> <a name="contentLinkUri" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.contentLinkUri"></a>

```typescript
public readonly contentLinkUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#content_link_uri LogicAppIntegrationAccountAssembly#content_link_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#id LogicAppIntegrationAccountAssembly#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#metadata LogicAppIntegrationAccountAssembly#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LogicAppIntegrationAccountAssemblyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#timeouts LogicAppIntegrationAccountAssembly#timeouts}

---

### LogicAppIntegrationAccountAssemblyTimeouts <a name="LogicAppIntegrationAccountAssemblyTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.Initializer"></a>

```typescript
import { logicAppIntegrationAccountAssembly } from '@cdktf/provider-azurerm'

const logicAppIntegrationAccountAssemblyTimeouts: logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#create LogicAppIntegrationAccountAssembly#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#delete LogicAppIntegrationAccountAssembly#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#read LogicAppIntegrationAccountAssembly#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#update LogicAppIntegrationAccountAssembly#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#create LogicAppIntegrationAccountAssembly#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#delete LogicAppIntegrationAccountAssembly#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#read LogicAppIntegrationAccountAssembly#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/logic_app_integration_account_assembly#update LogicAppIntegrationAccountAssembly#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppIntegrationAccountAssemblyTimeoutsOutputReference <a name="LogicAppIntegrationAccountAssemblyTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer"></a>

```typescript
import { logicAppIntegrationAccountAssembly } from '@cdktf/provider-azurerm'

new logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogicAppIntegrationAccountAssemblyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a> | cdktf.IResolvable

---



